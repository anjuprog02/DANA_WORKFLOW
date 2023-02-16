import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Modals.css'
const TaskModal = ({
  setModal
}) => {
  const dispatch = useDispatch();

  const { singleData } = useSelector((state) => state.taskObjectReducer);
  const taskdata = { ...singleData };
  const { data2 } = useSelector((state) => state.NcrReducer);
  const singleNcr = {...data2}
  console.log("here is taskdata")
console.log(taskdata)
console.log("here is singleNcr")
console.log(singleNcr)

  // let navigate = useNavigate();
  return (
    <div id="myModal" className="modal">
  
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setModal(false);
          }}
        >
          &times;
        </span>
        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center', marginTop: '2rem' }}>
          <Typography gutterBottom variant="h6" component="div">
            Resolution Owner Approver for {taskdata.data.Id}
          </Typography>
        </div>
        <Divider sx={{ borderWidth: '1px', borderColor: 'black' }} />
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div>
            <div style={{ display: 'flex' }}>
              <Typography fontWeight={600} gutterBottom variant="h9" component="div">
                Object ID:
              </Typography>
              <Typography marginLeft={'4.2rem'} gutterBottom variant="h9" component="div" color={'blue'} style={{ cursor: 'pointer' }}>
                {taskdata.data.Id}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography fontWeight={600} gutterBottom variant="h9" component="div">
                Assigned Date:
              </Typography>
              <Typography marginLeft={'1.3rem'} gutterBottom variant="h9" component="div">
              {taskdata.data.AssignedDate.substring(0,10)}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography fontWeight={600} gutterBottom variant="h9" component="div">
                Creator:
              </Typography>
              <Typography marginLeft={'4.8rem'} gutterBottom variant="h9" component="div">
              {taskdata.data.Creator}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography fontWeight={600} gutterBottom variant="h9" component="div">
                Created on:
              </Typography>
              <Typography marginLeft={'3rem'} gutterBottom variant="h9" component="div">
              {taskdata.data.created.substring(0,10)}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography fontWeight={600} gutterBottom variant="h9" component="div">
                Task Details:
              </Typography>
              <Typography marginLeft={'2.5rem'} gutterBottom variant="h9" component="div">
              {taskdata.data.Issue}
              </Typography>
     
              
            
             
            
            </div>
          </div>
          <div style={{ borderLeft: '2px solid black', height: '100', marginLeft: '5rem' }}></div>
          <div style={{ marginLeft: '1.5rem' }}>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
              Comment:
            </Typography>
            <textarea
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <div style={{ display: "flex",justifyContent:'right'}}>
              <button className="bst-btn-delete">Reject
              </button>
              <button className="bst-btn-update">Approve
              </button>
            </div>

          </div>
        </div >
      </div >
    </div >
  );
};

export default TaskModal;