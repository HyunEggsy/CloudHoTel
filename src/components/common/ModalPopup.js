import React from 'react'

function ModalPopup() {
  return (
    <div>
      
<div class="modal fade" id="myModal" role="dialog">

<div class="modal-dialog">

    <div class="modal-content">
    
        <div class="modal-header">
        
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h4 class="modal-title">모달 제목</h4>
            
        </div>

        <div class="modal-body">
        
          <p>팝업 내용</p>

        </div>

        <div class="modal-footer">
        
          <p>팝업 footer</p>
            
        </div>

    </div>

</div>

</div>


      {/* <!-- Modal --> */}
      {/* id="exampleModal" */}
{/* <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default ModalPopup
