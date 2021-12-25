import React from 'react';
import Button_Modal from '../Modal_Ticket/Button_Modal';
import'./Ticket.css'
const Ticket = () => {

    return (
        <div>
        <section class="section">
        <div class="container">

            <div class="section__header">
                {/* <h3 class="section__suptitle">What we do</h3> */}
                <h2 class="section__title">Выберите желаемою планету</h2>
                <div class="section__text">
                    <p>"Указанные фотографии могут отличаться от реальности"</p>
                </div>
            </div>

            <div class="card">
                <div class="card__item">
                    
                    <div class="card__inner">
                        <div class="card__img card__1">
                            <img src="https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_system_planet_universe_galaxy_star_venus-256.png" alt=""/>
                        </div>
                        <div class="card__text"> </div>
                
                    </div>
                </div>

                <div class="card__item">
                    <div class="card__inner">
                        <div class="card__img card__2">
                            <img src="https://cdn3.iconfinder.com/data/icons/unigrid-phantom-science-vol-1/60/003_003_moon_planet_cosmos_space-256.png" alt=""/>
                        </div>
                        <div class="card__text">Ticket to Moon</div>
                    </div>
                </div>

                <div class="card__item">
                    <div class="card__inner">
                        <div class="card__img card__3">
                            <img src="https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_system_planet_universe_galaxy_star_saturn-256.png" alt=""/>
                        </div>
                        <div class="card__text">Ticket to Saturn</div>
                    </div>
                </div>
            </div>
            {/* <div class="card__item">
                <div class="card__inner">
                    <div class="card__img">
                        <img src="https://i.pinimg.com/originals/73/f0/b3/73f0b3408c7d0bc312b0fb2d9fe9f4cb.png" alt=""/>
                    </div>
                    <div class="card__text">super team</div>
                </div>
            </div>
            <div class="card__item">
                <div class="card__inner">
                    <div class="card__img">
                        <img src="https://i.pinimg.com/originals/73/f0/b3/73f0b3408c7d0bc312b0fb2d9fe9f4cb.png" alt=""/>
                    </div>
                    <div class="card__text">super team</div>
                </div>
            </div> */}

        </div>
    </section>
        </div>
    );
};

export default Ticket;