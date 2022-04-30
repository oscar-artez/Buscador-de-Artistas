import React, { useState,useEffect } from 'react'
import { Avatar,Layout, Divider, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Rate from './Rate';
import Synopsis from './Synopsis';
import InfoActor from './InfoActor';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { getInfoActor } from '../services/getApi';
import { createSearch } from '../actions/artistActions';

const { Header, Sider, Content } = Layout;

const Filmografia = () => {
  const nameActor = useSelector(state => state.nameActor);
  const [infoActor, setInfoActor] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getInfoActor(nameActor).then(data => {
      setInfoActor(data);
    })
  }, [nameActor])
  const backToSearch = () =>{
    dispatch(createSearch());
    navigate('/');
  }

  return (
    <div className='ContainerLayout'>
    <Layout className='layoutStyles'>
      <Header>
      <Button type="primary" icon={<ArrowLeftOutlined />} onClick={backToSearch}>Regresar</Button>
      </Header>
      <Layout>
        {
        infoActor.map((ele,index=0) =>(
          index === 0 &&
        <Sider key={index} width='300' className='SiderCustom'>
          <Avatar shape="square" size='200' src={`https://image.tmdb.org/t/p/w500/${ele.profile_path}`} className='AvatarCustom'/>
          <InfoActor name={ele.name} gender={ele.gender} popularity={ele.popularity}/>
        </Sider>
        ))   
        }
        <Content className='borderContainer'>
          <h1 >Películas:</h1>
        {
        infoActor.map((ele,index) =>(
          ele.known_for.map((movie,index)=>(
            <div key={index}>
            <Divider style={{margin:'20px 0'}} orientationMargin='200'/>
            <div className='ContainerFlex'>
            <h2>{movie.original_title}</h2>
            <Rate rate={movie.vote_average}/>
            </div>
            <div className='ContainerFlex'>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`poster de la pelicula ${movie.original_title}`}></img>
            <Synopsis overview={movie.overview} date={movie.release_date}/>
            </div>
          </div>
          ))
        ))   
      }
        </Content>
      </Layout>
    </Layout>



    </div>
  )
}

export default Filmografia