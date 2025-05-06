# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Aman Dhillon


## Check Your Understanding

### 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

I wouldn’t use a unit test for the entire “message” feature because it involves multiple components like the UI, backend, and network requests. That’s better suited for integration testing. However, unit tests would work well for testing smaller parts, like ensuring the message format is correct or validating that the app handles invalid characters properly.

### 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Yes, unit testing is a good fit for the “max message length” feature. It’s a straightforward validation that can be tested in isolation. A unit test would ensure that the app correctly limits the message to 80 characters and provides the right feedback if the user exceeds that limit.

