import { Icon } from 'semantic-ui-react'
import Image from 'next/image'

function Hot_Recipe() {
    return (
        <>
            <section className="hot_recipes_section_1">
                <div className="hot_recipes_section_1_food">
                    <div className="hot_recipes_section_1_container">
                        <div className="hot_recipes_section_1_hr">Hot Recipes</div>
                        <h1 className="hot_recipes_section_1_food_title">Delicious <br/>Papeta par Eda.</h1>
                        <p className="hot_recipes_section_1_food_description"><b>"Papeta par Eda" </b>is a popular Parsi dish featuring layers of potatoes and eggs cooked with spices. It's known for its rich flavor and is often enjoyed for breakfast or as a side dish in Parsi cuisine.</p>
                    </div>
                    <div className="hot_recipes_section_1_tf_categ">
                        <p className="hot_recipes_section_1_tf_categ_contain" id='time-categ-country'><Icon className='time'></Icon>45 mins</p>
                        <p className="hot_recipes_section_1_tf_categ_contain" id='time-categ-country'><Icon className='food'></Icon>Breakfast</p>
                        <p className="hot_recipes_section_1_tf_categ_contain" id='time-categ-country'><Icon className='map marker alternate'></Icon>India</p>
                    </div>
                </div>
                <div className="hot_recipes_section_1_image">
                    <Image src={'/images/Foods/papeta_par_eda.jpeg'} width='550' height='410' className="hot_recipes_section_1_image_contain" alt='Food'/>
                </div>
            </section>
        </>
    )
}
export default Hot_Recipe