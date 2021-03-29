
//Create Bingo Board

  const createCells = (function(){
    for(let i = 0; i < 76; i++){
      let board = document.getElementById('bingoBoard');
      let cell = document.createElement('div')
      cell.classList.add('cell')
          board.appendChild(cell)
    }

}())//Self Invoked Function

const bingoRandom = function(){
    const bingBoard = document.getElementById('bingoBoard')
    const cells = bingBoard.children
    for(let i = 0; i < 76; i++){
        let number = document.createElement('span')
        number.setAttribute('class','number')
        cells[i].appendChild(number)
        let random = Math.floor(Math.random() * 76) +1
        number.innerText = random
    }
}
    bingoRandom()

   
 
//Create Play Cards

    const next = document.getElementById('numOfCardsBtn')
    const playBtn = document.getElementById('playBtn')

    next.onclick = function(){
        let inputNum = document.getElementById('inputNum')
            inputNum.style.display ='none'

        playBtn.classList.remove('d-none')

        let playCards = document.getElementById('playCards') //this is where play cards go
        let playCardNum = document.getElementById('playCardNum').value;

        for(let i = 0; i< playCardNum; i++){ // playCardNum e.g. 5 means 5 cards will be created in html
            playCardNum = parseInt(playCardNum) //We get the number of how many play cards
           let newPlayCard = document.createElement('div')
           newPlayCard.setAttribute('class','playCard')
           newPlayCard.classList.add('mx-auto')
           playCards.appendChild(newPlayCard)
           
    
      for(let i = 0; i < 24; i++){ //Generate cells
            let cell = document.createElement('div')
            cell.classList.add('cell')
            let number = document.createElement('span')
            number.setAttribute('class','number')
            cell.appendChild(number)
            let random = Math.floor(Math.random() * 76) +1
            number.innerText = random 
            newPlayCard.appendChild(cell)
            }
        }     
    }


    //Create Gameplay
    // let checkedCells = []

    playBtn.onclick = function(){

            //Get random number from Bingo Board
           
            
                let bingoBoard = document.getElementById('bingoBoard')
                let cells = bingoBoard.querySelectorAll('.number')
                // let randomCell = cells[random]
                for(let i = 0; i<76; i++){
                    let random = Math.floor(Math.random() * 76) 
                    console.log(cells[random])
                    if(cells[random].parentNode.style.backgroundColor == 'yellow' ){
                        i++
                      
                    } else if(cells[random].parentNode.style.backgroundColor != 'yellow' ){
                        cells[random].parentNode.style.backgroundColor = 'yellow'
                        i = 76
                    }
                
                // if(cells[i].parentNode.style.backgroundColor == "rgb(255, 241, 110)" ){
                    
                // }
                // else if(cells[i].parentNode.style.backgroundColor != "rgb(255, 241, 110)" ){
                //     // cells[i].parentNode.style.backgroundColor = "rgb(255, 241, 110)"
                //     // console.log(cells[i])

                // }
            }
        //    randomCell.parentNode.style.backgroundColor = "rgb(255, 241, 110)"
                // let cellBoardNumber = randomCell.innerText
                // console.log(randomCell)
                // console.log(checkedCells)


                // console.log(parseInt(cellBoardNumber))
                // console.log(checkedCells)
            }


