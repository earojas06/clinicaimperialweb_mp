import React ,{ useState,useEffect,useCallback } from 'react'
import 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import { client } from '../../client'
import Marketplacehome from './marketplacehome'
import{ Header } from "./marketplaceheader";

const Marketplace  = () => {  
    const [isMarketplaceLoading,setIsMarketplaceLoading]= useState(false)
    const [MarketplaceSlides,setMarketplaceSlides] =useState([])

    const cleanUpMarketplace =  useCallback( (rawData)=> {
        const cleandata= rawData.map((Data) =>{
                const {sys,fields}=Data
                const {id}=sys
                const logo = fields.logo.fields.file.url  
                const producto1 = fields.producto1.fields.file.url  
                const valor1 = fields.valor1   
                const producto2 = fields.producto2.fields.file.url  
                const valor2 = fields.valor2  
                const producto3 = fields.producto3.fields.file.url  
                const valor3 = fields.valor3   
                const updateSlide ={id,logo,producto1,valor1,producto2,valor2,producto3,valor3}
                return updateSlide
        })

        setMarketplaceSlides(cleandata)
    },[])





    const getMarketplace = useCallback( async () => {
        setIsMarketplaceLoading(true)

     try {
        const response = await  client.getEntries({ content_type :'clinicaimperialProductos' })
        const responseData = response.items
       // console.log(responseData)
        if (responseData) {
            cleanUpMarketplace(responseData)
        }else{
            setMarketplaceSlides ([])
        }
        setIsMarketplaceLoading(false)
    } catch (error) {
        console.log(error)
        setIsMarketplaceLoading(false)

    }
        
    },[cleanUpMarketplace])

    useEffect(() => {
        getMarketplace()
    },[getMarketplace] )

    console.log(MarketplaceSlides)
    

    return(
        <div className='carousel'>
            <Swiper navigation>
               <h1></h1>
               {MarketplaceSlides.map((item) =>{
                const {id,logo,producto1,valor1,producto2,valor2,producto3,valor3} = item
                    return(
                        
                        <div>
                            <Header key ={id} logo={logo} />
                             {/* <img src={ producto1 }/>
                                <p> {valor1} </p> 
                                <Marketplacehome key ={id} producto1 = {producto1} valor1 ={valor1}
                                producto2 = {producto2} valor2 ={valor2} producto3 = {producto3} valor3 ={valor3}/>
                                  */}
                                </div>

                    
                    )
                })}
            </Swiper>
        </div> 

    )
  }

  export default Marketplace



  /*const marketPlaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
    },
    {
      image: marketplace2,
      name: "Pedram-mohamm...",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
    },
    {
      image: marketplace6,
      name: "Hoang-l-p-solan",
    },
    {
      image: marketplace7,
      name: "Joshua-jay",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
    },
  ];*/