package com.vanvan.service;

import com.vanvan.dto.TripDetailsDTO;
import com.vanvan.dto.TripHistoryDTO;
import com.vanvan.enums.TripStatus;
import com.vanvan.model.Driver;
import com.vanvan.model.Location;
import com.vanvan.model.Passenger;
import com.vanvan.model.Trip;
import com.vanvan.repository.DriverRepository;
import com.vanvan.repository.PassengerRepository;
import com.vanvan.repository.TripRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class TripRepositoryTest {

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private PassengerRepository passengerRepository;

    private Trip trip1;
    private Trip trip2;

    @BeforeEach
    void setUp() {
        // Criando motorista
        Driver driver = new Driver();
        driver.setName("Motorista 1");
        driver.setBirthDate(LocalDate.of(2000, 10,12));
        driverRepository.save(driver);
        // Se Driver tiver Id gerado, ele será salvo automaticamente ao persistir Trip

        // Criando 10 passageiros
        List<Passenger> passengers = List.of(
                new Passenger("Passenger 1", "CPF1", "Phone1", "email1@test.com", "pass1", LocalDate.of(1990, 1, 1)),
                new Passenger("Passenger 2", "CPF2", "Phone2", "email2@test.com", "pass2", LocalDate.of(1991, 2, 2)),
                new Passenger("Passenger 3", "CPF3", "Phone3", "email3@test.com", "pass3", LocalDate.of(1992, 3, 3)),
                new Passenger("Passenger 4", "CPF4", "Phone4", "email4@test.com", "pass4", LocalDate.of(1993, 4, 4)),
                new Passenger("Passenger 5", "CPF5", "Phone5", "email5@test.com", "pass5", LocalDate.of(1994, 5, 5)),
                new Passenger("Passenger 6", "CPF6", "Phone6", "email6@test.com", "pass6", LocalDate.of(1995, 6, 6)),
                new Passenger("Passenger 7", "CPF7", "Phone7", "email7@test.com", "pass7", LocalDate.of(1996, 7, 7)),
                new Passenger("Passenger 8", "CPF8", "Phone8", "email8@test.com", "pass8", LocalDate.of(1997, 8, 8)),
                new Passenger("Passenger 9", "CPF9", "Phone9", "email9@test.com", "pass9", LocalDate.of(1998, 9, 9)),
                new Passenger("Passenger 10", "CPF10", "Phone10", "email10@test.com", "pass10", LocalDate.of(1999, 10, 10))
        );

        // Criando primeira viagem com passageiros 1-5
        trip1 = new Trip();
        trip1.setDriver(driver);
        trip1.setDeparture(new Location("CityA", "StreetA", "RefA"));
        trip1.setArrival(new Location("CityB", "StreetB", "RefB"));
        trip1.setDate(LocalDate.now());
        trip1.setTime(LocalTime.of(10, 0));
        trip1.setTotalAmount(new BigDecimal("150.00"));
        trip1.setStatus(TripStatus.COMPLETED);
        trip1.setPassengers(passengers.subList(0,5));
        passengers.subList(0,5).forEach(p -> p.getTrips().add(trip1));

        // Criando segunda viagem com passageiros 6-10
        trip2 = new Trip();
        trip2.setDriver(driver);
        trip2.setDeparture(new Location("CityC", "StreetC", "RefC"));
        trip2.setArrival(new Location("CityD", "StreetD", "RefD"));
        trip2.setDate(LocalDate.now().plusDays(1));
        trip2.setTime(LocalTime.of(15, 30));
        trip2.setTotalAmount(new BigDecimal("200.00"));
        trip2.setStatus(TripStatus.IN_PROGRESS);
        trip2.setPassengers(passengers.subList(5,10));
        passengers.subList(5,10).forEach(p -> p.getTrips().add(trip2));

        // Persistindo viagens (Location embutido vai junto)
        tripRepository.saveAll(List.of(trip1, trip2));

        passengerRepository.saveAll(passengers);

    }
    @Test
    void testFindAllTrips() {
        List<Trip> allTrips = tripRepository.findAll();
        assertEquals(2, allTrips.size());
    }

    @Test
    void testFindTripById() {
        Trip t = tripRepository.findById(trip1.getId()).orElse(null);
        Assertions.assertNotNull(t);
        assertEquals(TripStatus.COMPLETED, t.getStatus());
        assertEquals(5, t.getPassengers().size());
    }

    @Test
    void testTripDetailsDTOMapping() {
        Trip t = tripRepository.findById(trip2.getId()).orElseThrow();
        TripDetailsDTO dto = new TripDetailsDTO(
                t.getId(),
                t.getDate(),
                t.getTime(),
                t.getDriver().getName(),
                t.getPassengers().stream()
                        .map(p -> new com.vanvan.dto.PassengerDTO(p.getId(), p.getName()))
                        .toList(),
                t.getDeparture().getCity(),
                t.getArrival().getCity(),
                t.getTotalAmount(),
                t.getStatus()
        );

        assertEquals("CityC", dto.getDepartureCity());
        assertEquals(5, dto.getPassengers().size());
    }

    @Test
    void testTripHistoryDTOMapping() {
        List<Trip> trips = tripRepository.findAll();
        List<TripHistoryDTO> dtos = trips.stream()
                .map(t -> new TripHistoryDTO(
                        t.getId(),
                        t.getDate(),
                        t.getDriver().getName(),
                        t.getDeparture().getCity() + " -> " + t.getArrival().getCity(),
                        t.getPassengers().size(),
                        t.getTotalAmount(),
                        t.getStatus()
                )).toList();

        assertEquals(2, dtos.size());
        assertEquals("CityA -> CityB", dtos.get(0).getRoute());
        assertEquals("CityC -> CityD", dtos.get(1).getRoute());
    }

}