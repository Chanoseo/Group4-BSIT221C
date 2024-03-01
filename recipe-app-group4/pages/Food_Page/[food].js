import fs from 'fs';
import path from 'path';

import { Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Food({ food }) {
    return (
        <>
            <Link href='/'><Icon className = 'arrow left' id = 'icon'/></Link>
            <section className='food_section'>
                <div className='food_first_div'>
                    <h1 className='food_foodName'>{food.food_name}</h1>
                    <Image src={food.image} width='500' height='500' className="food_image" alt='Food'/>
                </div>
                <div className='food_second_div'>
                    <div className='food_time_categ_country'>
                        <p className='food_tcc'><Icon className='time'/>{food.time_cooking}</p>
                        <p className='food_tcc'><Icon className='food'/>{food.categ}</p>
                        <p className='food_tcc'><Icon className='map marker alternate'/>{food.country}</p>
                    </div>
                    <div className='food_ingredients'>
                        <h2 className='food_ingredients_title'>Ingredients:</h2>
                        <ul className='food_ul'>
                            {Object.values(food.ingredients).map((ingredient, index) => (
                                <li className='food_li' key={index}>
                                    <input type='checkbox' />
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='food_directions'>
                        <h2 className='food_directions_title'>Directions:</h2>
                        <ul className='food_ul'>
                            {Object.values(food.directions).map((ingredient, index) => (
                                <li className='food_li' key={index}>
                                    <input type='checkbox' />
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export const getStaticPaths = async () => {
    const filePath = path.join(process.cwd(), './Components/JSON/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    const paths = data.map(food => ({
        params: { food: food.id.toString() }
    }));

    return {
        paths,
        fallback: false // Set to false if you don't have other fallback behavior
    };
};

export const getStaticProps = async ({ params }) => {
    const filePath = path.join(process.cwd(), './Components/JSON/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    const food = data.find(item => item.id.toString() === params.food);

    return {
        props: {
            food
        }
    };
};

Food.getLayout = function PageLayout(page) {
    return (
        <>
            {page}        
        </>
    )
}