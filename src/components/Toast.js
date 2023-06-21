import React from "react";

export default function Toast(props){
    const initCap = (typ)=>{
        const lower = typ.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.toast && <div className={`"alert alert-success alert-dismissible fade show"`} role="alert">
        <strong>{initCap(props.toast.type)}</strong>{props.toast.message}
      </div>
    );
}