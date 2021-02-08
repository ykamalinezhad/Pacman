(function () {
    const myGrid = document.getElementById("myGrid");
    let row = "";
    for (let i = 5; i >= 1; i--) {
        row = "<tr>";
        for (let j = 1; j <= 5; j++) {
            row += "<td id='" + i.toString() + j.toString() + "'></td>";
        }
        row += "</tr>";
        myGrid.insertAdjacentHTML("beforeend", row);
    }
    let x = 0;
    let y = 0;
    let f = 'left';
    let tdId;
    let td;

    reset = () => {
        x = 0;
        y = 0;
        f = 'left';
        document.getElementById("X").value = 0;
        document.getElementById("Y").value = 0;
        document.getElementById("F").value = 'left';
        td.style.backgroundColor = "white";
    }
    move = () => {
        x = document.getElementById("X").value;
        y = document.getElementById("Y").value;
        f = document.getElementById("F").value;

        switch (f) {
            case 'left':
                x = parseInt(x) - 1;
                break;
            case 'up':
                y = parseInt(y) + 1;
                break;
            case 'right':
                x = parseInt(x) + 1;
                break;
            case 'down':
                y = parseInt(y) - 1;
                break;
        }

        tdId = x.toString() + y.toString();
        td = document.getElementById(tdId);
        if (!td || td === null) {
            document.getElementById('error-message').innerHTML = "Out Of Boundaries";
        }
        else {
            document.getElementById('error-message').innerHTML = "";
            td.style.backgroundColor = "lightblue";
        }
    }

    goRight = () => {
        td.style.backgroundColor = "white";
        f = 'right';
        x = parseInt(x) + 1;
        tdId = x.toString() + y.toString();
        td = document.getElementById(tdId);
        td.style.backgroundColor = "lightblue";
    }

    goLeft = () => {
        td.style.backgroundColor = "white";
        f = 'left';
        x = parseInt(x) - 1;
        tdId = x.toString() + y.toString();
        td = document.getElementById(tdId);
        td.style.backgroundColor = "lightblue";
    }

    goUp = () => {
        td.style.backgroundColor = "white";
        f = 'up';
        y = parseInt(y) + 1;
        tdId = x.toString() + y.toString();
        td = document.getElementById(tdId);
        td.style.backgroundColor = "lightblue";
    }

    goDown = () => {
        td.style.backgroundColor = "white";
        f = 'down';
        y = parseInt(y) - 1;
        tdId = x.toString() + y.toString();
        td = document.getElementById(tdId);
        td.style.backgroundColor = "lightblue";
    }

    displayReport = () => {
        if (x <= 0 || x >= 5 || y <= 0 || y >= 5) {
            document.getElementById("Report").value = "Out Of Boundaries";
        }
        else {
            document.getElementById("Report").value = "Pacman turned " + f + " and it is in Row (X): " + x + " , Column (Y): " + y;
        }
    }
}
    ()
); 