import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  listType:"picture",
  accept:".png,.jpg,.PNG,.JPG",
   onChange(info){
     const { status } = info.file;
     if (status !== 'uploading') {
       console.log(info.file, info.fileList);
     }
     if (status === 'done') {
       message.success(`${info.file.name} file uploaded successfully.`);
     } else if (status === 'error') {
       message.error(`${info.file.name} file upload failed.`);
     }
   },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const DragAndDrop = ({action, headers}) => {
  return (
    <Dragger {...props} action={action} headers={headers}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
  )
}

export default DragAndDrop


