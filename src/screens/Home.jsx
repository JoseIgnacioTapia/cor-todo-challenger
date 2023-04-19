import Form from '../components/Form';
import FiltersSection from '../components/FiltersSection';
import SectionCards from '../components/SectionCards';

function Home() {
  return (
    <div>
      <Form buttonTitle="Crear Tarea" />
      <FiltersSection />
      <SectionCards />
    </div>
  );
}

export default Home;
