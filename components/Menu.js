import { useRouter } from "next/router";
import { injectIntl } from 'react-intl';
import { useEffect, useState } from 'react';

const LINKS = [
    {
        url: '/category/shooting',
        id: 'SHOOTING',
    },
    {
        url: '/category/arcade',
        id: 'ARCADE'
    },
    {
        url: '/category/racing',
        id: 'RACING'
    },
    {
        url: '/category/girls',
        id: 'GIRLS'
    },
    {
        url: '/category/sports',
        id: 'SPORTS'
    },
    {
        url: '/category/action',
        id: 'ACTION'
    },
    {
        url: '/category/adventure',
        id: 'ADVENTURE'
    }
]

let deferredPrompt; 

function Menu({ intl }) {
    const router = useRouter();
    const categoryId = router?.query?.id;
    const [installable, setInstallable] = useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
          // Prevent the mini-infobar from appearing on mobile
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;
          // Update UI notify the user they can install the PWA
          setInstallable(true);
        });
    
        window.addEventListener('appinstalled', () => {
          // Log install to analytics
          console.log('INSTALL: Success');
        });
    }, []);

    useEffect(() => {
        const selectRemove = document.querySelectorAll(".sports");
        if (installable === true) {
            selectRemove.forEach((select) => {
                select.classList.add("hide")
            });
        } else {
            selectRemove.forEach((select) => {
                select.classList.remove("hide")
            });
        }
    }, [installable])

    const handleInstallClick = (e) => {
        // Hide the app provided install promotion
        setInstallable(false);
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
        });
    };

    return(
        <>
            <ul className="humoqMenu">
                <a  onClick={handleInstallClick} className={`${ installable === true ? "buttonDownload mobile" : "buttonDownload mobile hide"}`} key="downloadMobile"><li>DOWNLOAD</li></a>
                {LINKS.map(val => (
                    <a className={categoryId === val?.id?.toLowerCase() ? 'humoqActiveMenu ' + val?.id?.toLowerCase() : val?.id?.toLowerCase()} key={val?.url} href={val?.url}><li>{intl?.formatMessage({ id: val?.id })}</li></a>
                ))}
                <a onClick={handleInstallClick} className={`${ installable === true ? "buttonDownload desktop" : "buttonDownload desktop hide"}`} key="download"><li>DOWNLOAD</li></a>
            </ul>
        </>
    )
}

export default injectIntl(Menu);