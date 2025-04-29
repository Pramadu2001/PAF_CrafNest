import React from 'react';
import ProgressUpdateForm from './ProgressUpdateForm';
import ProgressUpdateList from './ProgressUpdateList';

function LearningProgress() {
  const [refresh, setRefresh] = React.useState(false);

  const refreshList = () => setRefresh(!refresh);

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Learning Progress Updates</h1>
      
      <section className="bg-white rounded-xl shadow-sm p-6">
        <ProgressUpdateForm refreshList={refreshList} />
      </section>

      <section className="bg-white rounded-xl shadow-sm">
        <ProgressUpdateList key={refresh} />
      </section>
    </div>
  );
}

export default LearningProgress;