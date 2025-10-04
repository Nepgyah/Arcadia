export default function Quote(
    {
        className,
        miniTitle,
        header,
        quoteOne,
        quoteTwo,
        name,
        role,
        imageLink,
        imageFirst
    } : {
        className: string,
        miniTitle: string,
        header: string,
        quoteOne: string,
        quoteTwo: string,
        name: string,
        role: string,
        imageLink: string,
        imageFirst: boolean
    }
) {

    return (
        <div className={`user-quote ${className} ${imageFirst ? '' : 'image-second'}`}>
            <div className="user-quote__image">
                <img className="animation__floating" src={imageLink} alt={name} />
                <div>
                    <p className="name">{name}</p>
                    <p className="role">{role}</p>
                </div>
            </div>
            <div className="section-main">
                <p className="section-main__mini-title">{miniTitle}</p>
                <h2 className="section-main__title">{header}</h2>
                <div>
                    <p>{quoteOne}</p>
                    {
                        quoteTwo && 
                        <>
                            <br />
                            <p>{quoteTwo}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}