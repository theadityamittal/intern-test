import React, { useRef } from 'react';
import Modal from 'react-modal';
import './Card.css';
import blue from './blue.svg';
import yellow from './yellow.svg';
import remove from './remove.svg';

Modal.setAppElement('#root')

export default function Card({ data }) {
  const imgRef = useRef(null)  
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
    removeShadow();
  }

  function showShadow() {
    imgRef.current.style.display = 'flex'
  }

  function removeShadow() {
    imgRef.current.style.display = 'none'
  }

  return (
    <div className='card' onMouseOver={showShadow} onMouseOut={removeShadow}>
        <section className='thumbnail' style={{backgroundImage: `url(${data.thumbnail.small})`}}>
            <div ref={imgRef} className='shadowBg'>
                <h3 className='more' onClick={openModal}>Learn More</h3>
            </div>
        </section>
        <section className='content'>
            <div className='title' onClick={openModal}>
                <span><img className='icon' alt="bluedot" src={blue}/><img className='icon' alt="yellowdot" src={yellow}/></span>
                <h2>{data.title}</h2>
            </div>
            <div className='about'>
                <p>{data.content}</p>
            </div>
            <div className='card-footer'>
                <p>{`${data.author.name} - ${data.author.role}`}</p>
                <p>Nov 25, 2020</p>
            </div>
        </section>     
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='modal'
          overlayClassName='modal-overlay'
          bodyOpenClassName='modal-body'
          contentLabel="Example Modal"
        >
          <section className='close'>
            <img className='icon' src={remove} alt="close" onClick={closeModal}></img>
          </section>
          <section className="thumbnail" style={{backgroundImage: `url(${data.thumbnail.large})`}}></section>
          <section className="content">
            <div className="title">
              <h3>{data.title}</h3>            
            </div>
            <div className="about">
              <p>{data.content}</p>
            </div>
            <div className="author">
              <img className="avatar" alt={data.author.name} src={data.author.avatar}/>
              <p>{`${data.author.name} - ${data.author.role}`}</p>
            </div>
          </section>
        </Modal> 
      </div>
  );
}