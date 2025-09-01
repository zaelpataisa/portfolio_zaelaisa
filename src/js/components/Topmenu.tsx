
import IconSelect from "./Icons";
import { type IconCode } from "./Icons";
import { Link, useLocation } from 'react-router-dom';

interface LinkData {
  path: string;
  icon: IconCode;
}

const Topmenu = () => {
  const pIconStyles = "text-[1.5rem] text-[var(--colors-01)]";

  const location = useLocation();
  const actualUrl = location.pathname;
  const actualColor = 'text-[var(--colors-06)]';

  const linksData: { data: LinkData[] } = {
    data: [
      {'path': '/knowledges',           'icon': 'FaBook'},
      {'path': '/skills',               'icon': 'FaLaptopCode'},
      {'path': '/',                     'icon': 'FaHome'},
      {'path': '/works',                'icon': 'FaNetworkWired'},
      {'path': '/projects',             'icon': 'GrProjects'},
      // {'path': '#',                     'icon': 'IoIosColorPalette'},
      // {'path': '#',                     'icon': 'MdLanguage'},
    ]
  };

  return (
    <>
      <div
        className={`flex flex-row fixed z-40 bottom-[1rem] left-1/2 -translate-x-1/2 w-auto py-2 px-3 space-x-6 bg-[var(--colors-02)]/80 rounded-xl border-1 border-[var(--colors-05)]`}
      >
        {linksData.data && linksData.data.length > 0 ? (
          linksData.data.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className={`
                ${pIconStyles} 
                ${actualUrl === item.path ? `${actualColor}` : 'text-[var(--colors-01)]'}
                ${index == 5 || index == 6 ? 'border-l-2 border-[var(--colors-01)] pl-5' : ''}
              `}
            >
              <IconSelect iconCode={`${item.icon}`} />
            </Link>
          ))
        ) : (
          <p>Error en la carga de datos</p>
        )}
      </div>
    </>
  );
}

export default Topmenu;

