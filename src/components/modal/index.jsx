import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalCard } from './styles'

export function ModalCards( {item} ) { 
  console.log(item)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  let thumbnail= item.imageLinks && item.imageLinks.thumbnail;
  return (
    <ModalCard>
      <Button color="danger" onClick={toggle} >
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} className='Modali' style={{color: 'black'}}>
        <img style={{height: '450px'}} src={thumbnail} />
        <ModalHeader toggle={toggle}>
                {item.title}
        </ModalHeader>
        <ModalBody style={{color: 'black'}}>
            {item.description}
        </ModalBody> 
        <ModalFooter>   
            <Button color="primary" target='_blank' href={item.previewLink}>
                Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
          </ModalFooter>
      </Modal>
    </ModalCard>
  );
}


 
