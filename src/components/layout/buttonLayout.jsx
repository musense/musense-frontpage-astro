import HeaderScrollLink from './HeaderScrollLink';

export default function ButtonLayout() {
    return (
        <div className='btn-wrapper'>
            <a href="https://www.facebook.com/musense.marketing" target="_blank" className="fixedBtn fb-btn"></a>
            <a href="https://www.instagram.com/musense.marketing/" target="_blank" className="fixedBtn ig-btn"></a>
            <HeaderScrollLink
                currentId="fixed-contactUs"
                offset={-10}
                className={`fixedBtn email-btn`}
                to='contact'
            />
        </div>
    )
}
