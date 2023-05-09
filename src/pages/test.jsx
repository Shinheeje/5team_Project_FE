<PostWrap>
<PostItemWrap method="post" encType="multipart/form-data" onSubmit={(e) => {
  e.preventDefault()
}}>
  <PostItemTitle
    placeholder="제목"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <PostImg src={preview} alt="" />
  <FileWrap>
    <FileTextInput value={fileName} placeholder="첨부파일" readOnly />
    <FileButton for="file">파일찾기</FileButton>
    <FileInput type="file" id="file" onChange={handleFileChange} />
  </FileWrap>
  <PostBody value={content} onChange={(e) => setContent(e.target.value)}>
    파닥파닥몬
  </PostBody>
  <PostBtnWrap>
    <PostBtn
      onClick={() => {
        submitButtonHandler();
      }}
    >
      제출하기
    </PostBtn>
  </PostBtnWrap>
</PostItemWrap>
</PostWrap>