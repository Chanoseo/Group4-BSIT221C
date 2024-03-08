import Head from 'next/head'

import { Icon } from 'semantic-ui-react'

export default function Contacts () {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <main>
                <section className="contacts_section_1">
                    <h1 className="contacts_head">Contact</h1>
                    <p className="contacts_para">Connect with us effortlessly through our contact page, your gateway to reaching out and engaging with our team.</p>
                </section>
                <section className="contacts_section_2">
                    <div className="contacts_section_2_left">
                        <div className="contacts_section_2_left_container">
                            <h1 className="contacts_section_2_contact_information">Contact Information</h1>
                            <p className="contacts_section_2_desc">Connect with us effortlessly through our contact page, your gateway to reaching out and engaging with our team.</p>
                            <div className="contacts_section_2_div_1_container">
                                <i className="contacts_icon"><Icon className='phone'></Icon></i>
                                <div className="contacts_section_2_contact">
                                    <p className='contacts_num'>+9472839281</p>
                                    <p className='contacts_num'>+9472839281</p>
                                </div>
                            </div>
                            <div className="contacts_section_2_div_2_container">
                                <i className="contacts_icon"><Icon className='mail'></Icon></i>
                                <div className="contacts_section_2_email">
                                    <p>Support@recipe.com</p>
                                </div>
                            </div>
                            <div className="contacts_section_2_div_3_container">
                                <i className="contacts_icon"><Icon className='map marker alternate'></Icon></i>
                                <div className="contacts_section_2_location">
                                    <p>Laguna, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action='' method='' className="contacts_form">
                        <div className="contacts_name_email">
                            <input type='text' placeholder='First Name' className="contacts_name"></input>
                            <input type='text' placeholder='Last Name' className="contacts_name"></input>
                        </div>
                        <input  type='text' placeholder='Email' className="contacts_email"></input>
                        <input  type='text' placeholder='Comment' className="contacts_comment"></input>
                        <input type='submit' value='Send Message' className="contacts_submit"></input>
                    </form>
                </section>
            </main>
        </>
    )
}