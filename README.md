# appointments-frontend

Frontend application for an appointment scheduling app built with JavaScript, jQuery and Bootstrap


## Screenshots
<p align="center">
    <img src="https://preview.ibb.co/gUWXxo/Screen_Shot_2018_06_08_at_4_36_08_AM.png" />
</p>
<p align="center">
    <img src="https://preview.ibb.co/cpWbOT/Screen_Shot_2018_06_08_at_4_33_00_AM.png" />
</p>
<p align="center">
    <img src="https://preview.ibb.co/j5OO3T/Screen_Shot_2018_06_08_at_4_33_57_AM.png" />
</p>

Features
--------

- Create appointments, display list of appointments
- Validation of date, time and description input
- Single page application, using AJAX for network calls
- Module Design Pattern used for the JavaScript code

Technologies and Libraries
--------

- [PERL](https://www.perl.org/)
- JSON
- [SQLite](https://www.sqlite.org/index.html)
- [JQUERY](https://jquery.com/)
- HTML/CSS
- [Bootstrap](https://getbootstrap.com/)

Local Setup
-------------
**Note:** This app was built and tested on macOs High Sierra, version 10.13.4

- Download or clone this repo into the document root of your apache webserver. Depending on your apache setup or operating system, your document root could be named `www`, `Sites` or `htdocs`
- Download or clone the Perl/CGI backend for this application found at https://github.com/jibolash/appointments-backend into the `cgi-bin` folder on apache. CGI scripts can only be run on apache if they are placed in the `cgi-bin` folder or symlinked from another folder into the `cgi-bin` folder.
- Run the command `sudo chmod 755 /path-to/cgi-bin/appointments-backend`.
**Note:** `path-to` indicates the path to the `appointments-backend` folder inside `cgi-bin` where you cloned or downloaded the repo in the step above
- Start apache
- Vist application in your browser at `http://localhost/appointments-frontend`


How It Works
-------------
- The frontend of the application makes AJAX calls with a getAppointments() function inside js/app.js to the Perl backend
- The backend uses CGI to dynamically communicate with the frontend
- The Perl backend saves and fetches data from an SQLite database by using it's inbuilt DBI and the SQLite specific DBD
- The Perl backend recieves and sends appropriate JSON data from and to the frontend

Notes
-------------
- This app is separated into two repos to emphasize the separation of concerns between the frontend and the backend. We can however combine the two separate repos into one, put them on any location on our workstation, and create symlinks to the folders we downloaded the repos into
- For a fresh database, the db.sqlite database file can be deleted, the app automatically creates a new database file if it doesn't find any
- This app makes AJAX calls to the Perl backend

Personal thoughts on Perl
-------------
- I've enjoyed toying around with Perl over the last 2 days. It was also fascinating for me to see that JavaScript borrowed some ideas from Perl, like the use of `use strict`
- I was surprised to learn that the Comprehensive Perl Archive Network contains over 200, 000 modules. This shows the Perl community is still very active, even if the language does not attract as much glamour as the latest trendy programming languages.
- As a programmer who believes that programming languages are tools and using only one is not efficient, I'm pleased I can now say that I have an introductory level of familiarity with Perl, even though, the more I learnt of it while building this project, I kept on realising there is so much more to learn. And so I look forward to learning more of Perl

Primary Learning Resources
-------------
- [Beginning Perl Web Development](https://www.amazon.com/Beginning-Perl-Web-Development-Professional/dp/1590595319)
- [Perl::learn](https://learn.perl.org/)
- [TutorialsPoint](https://www.tutorialspoint.com/perl/perl_cgi.ht)
