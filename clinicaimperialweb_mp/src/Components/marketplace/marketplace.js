import React ,{ useState,useEffect,useCallback } from 'react'
import 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import { client } from '../../client'

const Marketplace  = () => {  
    const [isMarketplaceLoading,setIsMarketplaceLoading]= useState(false)
    const [MarketplaceSlides,setMarketplaceSlides] =useState([])

    const cleanUpMarketplace =  useCallback( (rawData)=> {
        const cleandata= rawData.map((Data) =>{
                const {sys,fields}=Data
                const {id}=sys
                const producto1 = fields.producto1.fields.file.url  
                const valor1 = fields.valor1   
                const updateSlide ={id,producto1,valor1}
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
               <h1> marketplace _ _ 1</h1>
               {MarketplaceSlides.map((item) =>{
                const {id,producto1,valor1} = item
                    return(
                        <div>
                              <img src={ producto1 }/>
                                <p> {valor1} </p>

                        </div>
                      
                    )
                })}



            </Swiper>
        </div> 

    )
  }

  export default Marketplace