class Hotels {

    render() {
        let htmlHotels = ''
        let htmlCheckFilter = ''

        HOTEL.forEach(({id,city,name,price,img,rev,classHidden}) => {
            htmlHotels += `
            <a href="#" class="card-link ${classHidden}">
            <div class="card">
                <div class="card__badges">
                    <div class="card__badge card__badge--class">★★★★</div>
                    <div class="card__badge card__badge--credit">${price} грн</div>
                </div>
                <div class="card__img">
                    <img src='${img}' alt="card${id}">
                </div>
                <div class="card__content">
                    <h4 class="card__title">${name}</h4>
                    <div class="card__term">Срок сдачи до 4 кв. 2022 г.</div>
                    <div class="card__metro">${city}</div>
                    <div class="card__address">${rev}</div>
                </div>
            </div>
        </a>
            `
        })
        ROOT_HOTELS.innerHTML = htmlHotels

        checkFilter.forEach(({id, filt, visibility}) => {
            htmlCheckFilter += `
            <label class="checkbox ${visibility}">
                                <input type="checkbox" class="checkbox__real" name="value-${id}" >
                                <span class="checkbox__fake"></span>
                                <span class="checkbox__title">${filt}</span>
                            </label>
            `
        })

        ROOT_CHECK_FILTER.innerHTML = htmlCheckFilter
    }  
}

const renderHotels = new Hotels()
renderHotels.render()