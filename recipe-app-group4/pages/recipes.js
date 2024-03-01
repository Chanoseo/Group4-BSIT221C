import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/Components/Constants/Header'
import { Icon } from 'semantic-ui-react'
import React, { useState } from 'react'

export default function Recipes ({ foods }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredUsers = foods.filter(food => 
        food.food_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.categ.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Recipes</title>
            </Head>
            <main>
                <section className="recipes_section_1">
                    <h1 className="recipes_head">Recipes</h1>
                    <p className="recipes_para">We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your rankings, improve brand.</p>
                </section>
                <div className='input'>
                    <input type='text' placeholder='Search food or category' value={searchTerm} onChange={handleChange} />
                </div>
                <section className="recipes_section_2">
                    {
                        filteredUsers.map(i => {
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

Recipes.getLayout = function PageLayout(page) {
    return (
        <>  
            <Header />
            {page}  
        </>
    )
}