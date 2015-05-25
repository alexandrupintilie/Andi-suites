Feature: Filling of addressbook
      2nd line
Scenario: Initial state of created addressbook
  Given no prior existing addressbook
  When I create a new addressbook
  Then no entries should be present

Scenario: State after adding first entry
  Given a newly created addressbok
  When entering the first person
  Then one entry should be present
