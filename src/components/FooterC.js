import React from 'react'
import {Button} from 'react-bootstrap'
import {
    MDBFooter,
    MDBContainer,
  } from 'mdb-react-ui-kit';

const FooterC = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <Button variant='outline-light' className='m-1 btn-floating rounded-circle' href='https://www.linkedin.com/in/ronit-nagarapu/'>
            <i class="bi bi-linkedin"></i>
          </Button>
          <Button variant='outline-light' className='m-1 btn-floating rounded-circle' href='https://github.com/ronitnag04/'>
            <i class="bi bi-github"></i>
          </Button>
          <Button variant='outline-light' className='m-1 btn-floating rounded-circle' href='https://www.facebook.com/ronit.nagarapu'>
            <i class="bi bi-facebook"></i>
          </Button>
          <Button variant='outline-light' className='m-1 btn-floating rounded-circle' href='https://www.instagram.com/ronit_np/'>
            <i class="bi bi-instagram"></i>
          </Button>
        </section>
      </MDBContainer>

      <div className='text-center p-3'>
        © 2022 Copyright: Ronit Nagarapu | All rights reserved
      </div>
    </MDBFooter>
  )
}

export default FooterC