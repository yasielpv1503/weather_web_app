import React from 'react';
import { _t } from '../../core/helper/i18n';
import { withRouter } from "react-router-dom";
 import { connect } from 'react-redux';  
function Header() {
  
  return (
    <>
 
      <header className="cd-main-header js-cd-main-header">
        
 
      </header>


 

    </>
  );
}
let mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = () => ({});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));


