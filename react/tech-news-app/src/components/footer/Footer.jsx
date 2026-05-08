import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a className="brand" href="#">
          <span className="brand-mark">D</span>
          <span>{t('navbar.brand')}</span>
        </a>
        <p>{t('footer.description')}</p>
      </div>

      <div className="footer-column">
        <h4>{t('footer.coverage')}</h4>
        <a href="#">{t('footer.links.ai')}</a>
        <a href="#">{t('footer.links.consumerTech')}</a>
        <a href="#">{t('footer.links.cybersecurity')}</a>
        <a href="#">{t('footer.links.enterprise')}</a>
      </div>

      <div className="footer-column">
        <h4>{t('footer.company')}</h4>
        <a href="#">{t('footer.links.about')}</a>
        <a href="#">{t('footer.links.advertise')}</a>
        <a href="#">{t('footer.links.careers')}</a>
        <a href="#">{t('footer.links.contact')}</a>
      </div>

      <div className="footer-column">
        <h4>{t('footer.follow')}</h4>
        <div className="social-links" aria-label="Social links">
          <a href="#" aria-label="X">X</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;