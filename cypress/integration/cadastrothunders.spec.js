/// <reference types="cypress" />

var Chance = require ('chance')
var chance = new Chance()

describe('Cadastrar clientes Thunders - Automation Practice', () => {
    it('Dado que esteja na página de cadastro do site Automation Practice', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#SubmitCreate').should('exist')
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()
        cy.url().should('contain', 'account-creation')
    });
    it('Quando preencher todos os campos obrigatórios e corretamente', () => {  
        cy.get('[type="radio"]').first().check()
        cy.get('input[name=customer_firstname]').type(chance.first()) 
        cy.get('input[name=customer_lastname]').type(chance.last()) 
        cy.get('#email').clear()
        cy.get('#email').type(chance.email())
        cy.get('input[name=passwd]').type('12345')
        cy.get('select#days').select('3', {force: true})
        cy.get('select#months').select('June', {force: true})
        cy.get('select#years').select('1987', {force: true})
        cy.get('input[name=company]').type('Samuca LTDA')
        cy.get('input[name=address1]').type(chance.address()) 
        cy.get('input[name=city]').type(chance.city()) 
        cy.get('select#id_state').select('Alabama', {force: true})
        cy.get('input[name=postcode]').type(chance.zip({plustwo: true}))
        cy.get('#other').type('My phone number is +55 11 9.9898.9989')
        cy.get('#phone_mobile').type(chance.phone({country: "br", mobile: true}))
        cy.get('input[name=alias]').clear()
        cy.get('input[name=alias]').type('example')
        cy.get('#submitAccount').click()
    
    });
    it('Então o cadastro deverá ser realizado com sucesso', () => {
        cy.get('.logout').should('exist')
        
    });
});
