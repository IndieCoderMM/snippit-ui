import SelectBox from '@/components/SelectBox';
import { Languages } from '@/constants';
import React, { useState } from 'react';

const SnippetForm = () => {
  const [snippetData, setSnippetData] = useState({
    title: '',
    description: '',
    language: '',
    code: '',
    tags: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setSnippetData({
      ...snippetData,
      [name]: value,
    });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (inputValue.length === 0) return;

    const tags = inputValue.split(',') as string[];
    setSnippetData({
      ...snippetData,
      tags: tags.map((tag) => tag.trim()),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(snippetData);

    // Reset the form after submission
    setSnippetData({
      title: '',
      description: '',
      language: '',
      code: '',
      tags: [],
    });
  };

  return (
    <form
      className="mx-auto flex w-full max-w-5xl flex-col gap-10 pt-12 text-lg lg:pt-24"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="project-name">Snippet Name</label>
        <input
          id="project-name"
          type="text"
          name="title"
          value={snippetData.title}
          onChange={handleInputChange}
          className="formInput"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="project-description">Snippet Description</label>
        <textarea
          id="project-description"
          name="description"
          value={snippetData.description}
          onChange={handleInputChange}
          className="formInput"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col">
          <label htmlFor="project-language">Snippet Language</label>
          <SelectBox
            options={Languages}
            value={snippetData.language}
            onChange={(value) =>
              setSnippetData({ ...snippetData, language: value })
            }
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label htmlFor="project-tags">Snippet Tags</label>
          <input
            id="project-tags"
            type="text"
            className="formInput"
            value={snippetData.tags.join(', ')}
            onChange={handleTagsChange}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="project-code">Paste Code</label>
        <textarea
          id="project-code"
          name="code"
          value={snippetData.code}
          onChange={handleInputChange}
          rows={6}
          className="formInput"
        />
      </div>
      <button type="submit" className="submitBtn">
        Create Snippet
      </button>
    </form>
  );
};

export default SnippetForm;
