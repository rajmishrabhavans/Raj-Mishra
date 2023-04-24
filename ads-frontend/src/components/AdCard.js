import React from 'react'

const AdCard = ({ adData }) => {
    // console.log(adData);

    const urlToImg = (url) => {
        if (!url) return url;
        if(url.includes("drive.google.com")){
            const found = url.match(/d\/([A-Za-z0-9_-]+)/);
            //   console.log(found);
            if (found && found[1].length) {
                const new_url = 'https://drive.google.com/uc?export=view&id=' + found[1];
                return new_url;
            }
        }
        return url;
    }

    return (
        <section className="row">
            {adData.map((currElem, index) => {
                const { companyInfo, primaryText, headline, description, CTA, imageUrl } = currElem;
                return(
                    <div key={index} className='col-md-5 col-11 col-lg-4 ms-sm-1 ms-lg-0 my-2' >
                    <div className="card" style={{ width: '18rem',height:'600px'}}>
                        <h5 className="card-header">{companyInfo.name}</h5>
                        <img src={urlToImg(imageUrl)} className="card-img-top" alt="adImage" style={{maxHeight:'200px'}} />
                        <div className="card-body">
                            <div className="card-body d-flex flex-column h-100">
                                <p className="card-text text-muted">{description}</p>
                                <h5 className="card-title">{headline}</h5>
                                <p className="card-text">{primaryText}</p>
                                <p className="card-text mt-auto align-self-end"><button className="btn btn-primary">{CTA}</button></p>
                            </div>
                        </div>
                    </div>
                    </div>)
            })}
            </section>
    )
};

export default AdCard;
