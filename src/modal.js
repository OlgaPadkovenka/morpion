 const popUpWin = () => {
        new bootstrap.Modal(
           $("main").append(
               $( `<div class="modal">
                     <div class="modal-dialog">
                       <div class="modal-content">
                         <div class="modal-header">
                           <h5 class="modal-title">Félicitations!</h5>
                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div class="modal-body">
                           <p>Vous avez gagné!</p>
                         </div>
                         <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                         </div>
                       </div>
                     </div>
                     </div>`) 
            ).find(".modal")
        ).show();
       };


//V2
// const popUpWin = () => {
//     $("main").append(
//        $(         `<div class="modal">
//              <div class="modal-dialog">
//                <div class="modal-content">
//                  <div class="modal-header">
//                    <h5 class="modal-title">Félicitations!</h5>
//                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                  </div>
//                  <div class="modal-body">
//                    <p>Vous avez gagné!</p>
//                  </div>
//                  <div class="modal-footer">
//                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                  </div>
//                </div>
//              </div>
//              </div>`) 
//     );
       
//      let myModal = new bootstrap.Modal($(".modal"));
//      myModal.show();
//     };
