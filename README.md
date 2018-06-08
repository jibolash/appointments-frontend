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

## Local Setup
This app was built and tested on a macOs High Sierra, Version 10.13.4

- Download or clone this repo into the document root of your apache webserver. Depending on your apache setup or operating system, this could be named `www`, `Sites` or `htdocs`
- Download or clone the Perl/CGI backend for this application (https://github.com/jibolash/appointments-backend) into the `cgi-bin` folder on apache
- Run the command `sudo chmod 755 /path-to/cgi-bin/appointments-backend`. This makes the Perl scripts executable.
Notice that `path-to` indicates the path to the folder inside `cgi-bin` where you cloned or downloaded the repo in the step above

- Start your web server
- Vist website in your browser at `http://localhost/appointments-frontend`

## Notes
- This app is separated into two repos to emphasize the separation of concerns between the frontend and the backend. We can however combine the two separate repos into one, put them on any location on our workstation, and create symlinks to the folders we downloaded the repos into
- For a fresh database, the db.sqlite database file can be deleted, the app automatically creates a new database file if it doesn't find any
