import React, { component } from 'react';

const BoxRules = () => {
  return (
    <div class="box-rules-flex">
      <div class="box-rules">
          <div class="box-rules-title">What you should know</div>

          <div class="icon-flex">    
              <i class='bx bx-t-shirt bx-sm bx-border box-hover-blue box-rules-icon'></i> 
              <i class='bx bx-trash bx-sm bx-border box-hover-blue box-rules-icon'></i>
              <i class='bx bx-smiley-happy bx-sm bx-border box-hover-blue box-rules-icon'></i>
              <i class='bx bx-camera-off bx-sm bx-border box-hover-red box-rules-icon'></i>
          </div>
        
          <div>
              <p class="box-rules-p">Visitor must wear traditional Mataram Outfits to enter the tomb (you can rent it at reasonable cost)</p>
          </div>
      </div>
    </div>
  );
}

export default BoxRules;
