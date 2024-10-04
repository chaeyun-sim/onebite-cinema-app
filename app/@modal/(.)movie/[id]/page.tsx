import Modal from '@/_components/modal';
import MoviePage from '../../../movie/[id]/page';

export default function Page(props: any) {
  return (
    <div>
      <Modal>
        <MoviePage {...props} />
      </Modal>
    </div>
  );
}
