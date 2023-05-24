import HeaderScrollLink from './HeaderScrollLink';

export default function ButtonLayout({ path }) {
    // console.log("🚀 ~ file: buttonLayout.jsx:4 ~ ButtonLayout ~ path:", path)
    const disable = path === '/' ? false : true
    return (
        <div className='btn-wrapper'>
            <a href="https://www.facebook.com/musense.marketing" target="_blank" className="fixedBtn fb-btn"></a>
            <a href="https://www.instagram.com/musense.marketing/" target="_blank" className="fixedBtn ig-btn"></a>
            <HeaderScrollLink
                currentId="fixed-contactUs"
                offset={-10}
                className={`fixedBtn email-btn`}
                to={disable ? '/' : 'contact'}
                name='contactUs'
                disableScroll={disable}
            />
        </div>
    )
}
