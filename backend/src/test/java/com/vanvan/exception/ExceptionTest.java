package com.vanvan.exception;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


class ExceptionTest {

    @Test
    void testeCnhAlreadyExistsException() {
        String cnh = "123456789";
        CnhAlreadyExistsException exception = new CnhAlreadyExistsException(cnh);
        
        assertEquals("Esta CNH já está cadastrada " + cnh, exception.getMessage());
    }

    @Test
    void testeCpfAlreadyExistsException() {
        String cpf = "123.456.789-00";
        CpfAlreadyExistsException exception = new CpfAlreadyExistsException(cpf);
        
        assertEquals("Este CPF já está cadastrado: " + cpf, exception.getMessage());
    }
    @Test
    void testeDriverNotFoundException() {
        DriverNotFoundException ex = new DriverNotFoundException();
        assertEquals("O motorista não foi encontrado.", ex.getMessage());
    }
    @Test
    void testeIdadeMotorista() {
        UnderageDriverException ex1 = new UnderageDriverException();
        UnderageDriverException ex2 = new UnderageDriverException("Erro custom");
        assertEquals("Motorista está abaixo da idade mínima permitida.", ex1.getMessage());
        assertEquals("Erro custom", ex2.getMessage());
   
    }
    @Test
    void testeIdadeUsuario() {
        UnderageUserException ex = new UnderageUserException();
        assertEquals("Usuário está abaixo da idade permitida.", ex.getMessage());

    }
}   
