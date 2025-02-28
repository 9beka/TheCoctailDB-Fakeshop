import React from 'react'
import s from './Footer.module.css'
import footerIcon from '../../assets/icons/headerIcon.png'
import instagramIcon from '../../assets/icons/instagram.svg'
import vkIcon from '../../assets/icons/vkontakte.svg'

const Footer = () => {
  const socialMedia = [
    {
      img: instagramIcon,
      href: 'https://www.instagram.com/kanatovskiy',
    },
    
  ]
  const socialMediaRender = socialMedia.map((el, index) => (
    <a key={index} href={el.href}>
      <img src={el.img} alt="" />
    </a>
  ))

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__wrap}>
          <div className={s.icon__footer}>
            <img src={footerIcon} alt="" />
          </div>
          <div className={s.social__media}>
            <div className={s.socials}>{socialMediaRender}</div>

            <div className={s.phone}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.530549 5.62795C0.29859 3.78205 1.87862 2.5 3.57554 2.5H7.1672C7.89213 2.5 8.51333 3.01844 8.64301 3.73167L9.24935 7.06653C9.43046 8.06268 9.17133 9.08845 8.53884 9.87906L7.81545 10.7833C7.68654 10.9444 7.67475 11.1581 7.77434 11.3205C8.2439 12.0862 9.08857 13.3797 9.85533 14.1464C10.6221 14.9132 11.9156 15.7579 12.6813 16.2274C12.8437 16.327 13.0573 16.3152 13.2185 16.1863L14.1227 15.4629C14.9133 14.8304 15.9391 14.5713 16.9352 14.7524L20.2701 15.3588C20.9833 15.4885 21.5018 16.1096 21.5018 16.8346V20.1816C21.5018 22.0032 20.0508 23.624 18.1171 23.313C14.8045 22.7803 10.0694 21.0768 6.13538 16.8402C2.31033 12.7209 0.893311 8.51475 0.530549 5.62795ZM3.57554 3.5C2.31103 3.5 1.38547 4.41084 1.52275 5.50326C1.86104 8.19537 3.19444 12.2034 6.86818 16.1598C10.6177 20.1977 15.1307 21.8199 18.2758 22.3257C19.4703 22.5178 20.5018 21.5285 20.5018 20.1816V16.8346C20.5018 16.5929 20.329 16.3859 20.0912 16.3426L16.7564 15.7363C16.0448 15.6069 15.3121 15.792 14.7474 16.2438L13.8432 16.9672C13.3653 17.3495 12.6937 17.4081 12.1585 17.0799C11.3953 16.6119 10.008 15.7133 9.14823 14.8536C8.28849 13.9938 7.3899 12.6064 6.92187 11.8433C6.59367 11.3081 6.65231 10.6364 7.03458 10.1586L7.75797 9.25437C8.20975 8.68964 8.39485 7.95695 8.26548 7.24541L7.65914 3.91056C7.61591 3.67281 7.40885 3.5 7.1672 3.5H3.57554Z"
                  fill="#414141"
                />
              </svg>
              <p className={s.phone__number}>+996 704 003 687</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
