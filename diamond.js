const diamond = function (n){
           if(n%2 === 0) {  

                 n = n + 1;

            }

            let sp = "";
            let space = (n-1)/2;
            
            for (let i = 0; i <= n/2; i = i + 1) {
                for (let j = 0; j <= space; j++) {

                    sp = sp + " ";

                }
                space--;
                for (let k = 1; k <= 2*i-1 ; k++) {
                    sp = sp + "*";
                }
                sp = sp + "\n";
            }
            
          
            for (let i = 0; i <= n/2 ; i++) {
		
                for (let j = 0; j <= space; j++) {
                    sp = sp + " ";

                }
                space++;
                for (let c = 0; c <  2*(n/2 - i) ; c++) {
                    sp = sp + "*";
                }
                sp = sp + "\n";
            }
            return sp;
        }

        console.log(diamond(3));