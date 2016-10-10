const reverse = function (arr) {

            for (let i = 0; i < arr.length / 2; i++) {
                let temp;
                temp = arr[i];
                arr[i] = arr[arr.length - i - 1];
                arr[arr.length - i - 1] = temp;


            }
            return arr;
        }
        ;
        const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]);

        console.log(reversedArray);