/// <reference types="Cypress" />


context('Window', function(){


    it('Database Interactions', function(){


        cy.sqlServer("SELECT * FROM accounting_groups").then(function(result){

            console.log(result[0][1]);
        })

    })
   
   

})