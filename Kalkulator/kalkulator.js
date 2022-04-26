        function p1(){
            document.getElementById("wynik").value += "1";
        }
        function p2(){
            document.getElementById("wynik").value += "2";
        }
        function p3(){
            document.getElementById("wynik").value += "3";
        }
        function p4(){
            document.getElementById("wynik").value += "4";
        }
        function p5(){
            document.getElementById("wynik").value += "5";
        }
        function p6(){
            document.getElementById("wynik").value += "6";
        }
        function p7(){
            document.getElementById("wynik").value += "7";
        }
        function p8(){
            document.getElementById("wynik").value += "8";
        }
        function p9(){
            document.getElementById("wynik").value += "9";
        }
        function zero(){
            document.getElementById("wynik").value += "0";
        }
        function dodawanie(){
            document.getElementById("wynik").value += "+";
        }

        function kropka(){
            document.getElementById("wynik").value += ".";
        }

        function odejmowanie(){
            document.getElementById("wynik").value += "-";
        }

        function mnozenie(){
            document.getElementById("wynik").value += "*";
        }

        function dzielenie(){
            document.getElementById("wynik").value += "/";
        }
        function usun_koniec(){
            var wynik = document.getElementById("wynik").value;
            var ucięty_wynik = wynik.slice(0,-1);
            document.getElementById("wynik").value = ucięty_wynik;
            if(wynik==""){
                usuwanie();
            }
        }
        function usun(){
            document.getElementById("wynik").value="";
        }
        function liczenie(){
            var wynik = document.getElementById("wynik").value;
            let obliczenie = eval(wynik);
            document.getElementById("wynik").value=obliczenie;
            if(isFinite(obliczenie)==false){
                document.getElementById("wynik").value = "nie licze";
            }
        }