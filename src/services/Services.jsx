// import tools
import { Container , Row  , Col } from 'reactstrap'
import  { motion } from 'framer-motion'

// import style css
import "./services.css"

//import pages
import serviceData from '../assets/data/serviceData'

const Services = () => {

  return <section className="services">
    <Container>
        <Row className='z'>
            {
                serviceData.map((item,index)=>(
                    <Col lg="3" md="5" className='pb-3' key={index}>
                        <motion.div 
                            whileHover={{scale: 1.1}} 
                            className="service_item"  
                            style={{ 
                                background: item.bg 
                            }}
                        >
                            <span><i class={item.icon}></i></span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle} </p>
                            </div>
                        </motion.div>
                    </Col>
                ))}
        </Row>
    </Container>
  </section>
}
export default Services