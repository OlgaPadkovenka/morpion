const popUpWin = () => {
    const divContainerWin = document.createElement("div");
    divContainerWin.classList.add("modal");
    divContainerWin.tabindex = "-1";
    
    divContainerWin.innerHTML = `
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
      </div>`;
    
    const main = document.querySelector("main");
    main.appendChild(divContainerWin);
    let myModal = new bootstrap.Modal(divContainerWin);
    myModal.show();
    };