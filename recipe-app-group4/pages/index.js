import { Icon } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link'

import Head from 'next/head'

//Hot Recipe
import Hot_Recipe from '@/Components/Hot_Recipe/hot_recipe'

//Categories
import Categories from '@/Components/Categories/Categories'

import fs from 'fs'
import path from 'path'

export default function Home ( {foods} ) {
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main>
                <Hot_Recipe/>
                <Categories foods={foods}/>
                <section className="main_section_3">
                    <div className="main_section_3_title">
                        <h1 className="main_sec_3_title">Simple and Tasty Recipes.</h1>
                        <p className="main_section_3_food_description">Discover the joy of simple yet delicious recipes that tantalize your taste buds without the hassle.</p>
                    </div>
                    <div className="main_section_3_container">
                        {
                            foods.map(i => {
                                return (
                                    <div className="main_section_3_contain" id='contain'>
                                        <div className="main_section_3_image">
                                            <Image src={i.image} width='373' height='227' className="main_section_3_image_contain" alt='Food'/>
                                        </div>
                                        <div className="main_section_3_food_name" key={i.id}>
                                            <Link href={'/Food_Page/' + i.id}>
                                                <h1 className="main_foodName">{i.food_name}</h1>
                                            </Link>
                                            <div className="main_section_3_tf">
                                                <div className="main_section_3_tf_contain" id='time-categ-country'>
                                                    <p><Icon className='time'></Icon>{i.time_cooking}</p>
                                                </div>
                                                <div className="main_section_3_tf_contain" id='time-categ-country'>
                                                    <p><Icon className='food'></Icon>{i.categ}</p>
                                                </div>
                                                <div className="main_section_3_tf_contain" id='time-categ-country'>
                                                    <p><Icon className='map marker alternate'></Icon>{i.country}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </>
    )
}
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), './Components/JSON/recipe.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContent)
    return {
        props: {
            foods: data
        }
    }
}