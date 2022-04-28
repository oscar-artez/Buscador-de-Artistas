import React, { useState } from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSearch } from '../actions/artistActions';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: false,
  listType:"picture",
  accept:".png,.jpg,.PNG,.JPG",
};


const DragAndDrop = ({action, headers}) => {

  const [nameActor, setNameActor] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const onChange = (info)=>{
    const { status, response } = info.file;
     if (status === 'done') {
       setNameActor(response);
      message.success({
        content:`${info.file.name} El archivo se ha cargado correctamente.`,
        className:'MessageSuccess'
      });
    } else if (status === 'error') {
      message.error(`${info.file.name} Falló al intentar cargar la imagen`);
  } 
}

      const handleNavigate = ()=>{
      dispatch(createSearch(nameActor.actorName));
      // navigate('/filmografia')
      console.log(nameActor.actorName);
      }

  return (
    <>
    <Dragger onChange={onChange} {...props} action={action} headers={headers} className='Dragger'>
    <p className="ant-upload-drag-icon IconDrop">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
  <button onClick={handleNavigate}>Ir a su filmografia</button>
  </>

  )
}

export default DragAndDrop


