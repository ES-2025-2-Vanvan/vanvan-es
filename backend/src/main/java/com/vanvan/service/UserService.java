package com.vanvan.service;

import com.vanvan.dto.RegisterRequestDTO;
import com.vanvan.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vanvan.exception.CpfAlreadyExistsException;
import com.vanvan.exception.EmailAlreadyExistsException;
import com.vanvan.model.Administrator;
import com.vanvan.model.Passenger;
import com.vanvan.repository.AdministratorRepository;
import com.vanvan.repository.DriverRepository;
import com.vanvan.repository.PassengerRepository;
import com.vanvan.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private PassengerRepository passengerRepository;

    @Autowired
    private AdministratorRepository administratorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //futuramente haverá algo para "permitir" o registro como admin...
    //só registra admin e passageiro, pois motorista funciona como um "trabalhe conosco"
    public User register(RegisterRequestDTO data) {
        // Verifica se o e-mail já está cadastrado
        if (userRepository.findByEmail(data.username()) != null) {
            throw new EmailAlreadyExistsException(data.username());
        }
        // Verifica se o CPF já está cadastrado
        if (userRepository.findByCpf(data.CPF()) != null) {
            throw new CpfAlreadyExistsException(data.CPF());
        }

        var user = convertToUser(data);

        // Criptografa a senha
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        // Faz o switch pelo tipo de usuário
        return switch (data.role()) {
            case "passenger" -> passengerRepository.save((Passenger) user);
            case "administrator" -> administratorRepository.save((Administrator) user);
            default -> throw new IllegalArgumentException("Tipo de usuário inválido.");
        };
    }

    private User convertToUser(RegisterRequestDTO dto) {
        return switch (dto.role()) {
            case "passenger" ->
                    new Passenger(dto.username(), dto.CPF(), dto.phone(), dto.email(), dto.password());
            case "administrator" ->
                    new Administrator(dto.username(), dto.CPF(), dto.phone(), dto.email(), dto.password());
            default -> throw new IllegalArgumentException("Tipo de usuário inválido.");
        };
    }

}