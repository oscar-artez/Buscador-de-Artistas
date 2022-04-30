import React, { useState } from 'react'
import { Upload, message, Button } from 'antd';
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
       if(response.error !== ''){
        message.error(`${response.error}`)
       }else{
        setNameActor(response.actorName);
        message.success({
          content:`${info.file.name} El archivo se ha cargado correctamente.`,
          className:'MessageSuccess'
        });
       }
    } else if (status === 'error') {
      message.error(`${info.file.name} Falló al intentar cargar la imagen`);
  } 
}

      const handleNavigate = ()=>{
      dispatch(createSearch(nameActor));
      navigate('/filmografia')
      }

  return (
    <>
    <Dragger onChange={onChange} {...props} action={action} headers={headers}>
    <p className="ant-upload-drag-icon IconDrop">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Haz click o arrastra una imagen</p>
    <p className="ant-upload-hint">
      Selecciona la foto de un actor famoso para conocer quién es y en qué películas ha salido
    </p>
  </Dragger>
  {
    nameActor !== '' && <div className='ContainerButton'><Button onClick={handleNavigate} style={{width: '20%', height:'40px'}}>Ir a la Filmografia</Button>
    </div>
  }
  </>

  )
}

export default DragAndDrop


