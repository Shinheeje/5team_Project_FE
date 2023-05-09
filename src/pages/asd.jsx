<PostWrap>
      {/* <PostItemWrap method="post" encType="multipart/form-data" onSubmit={(e) => { */}
      <PostItemWrap method="post" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <PostItemTitle
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FileWrap>
          <Image cloudName='dgqi38rqo' publicId={preview} style={{
            height: '200px'
          }} />
          <input type="file" onChange={(event) => { setImageSelected(event.target.files[0]) }} />
          <button onClick={uploadImage}>Upload</button>
        </FileWrap>
        <PostBody value={content} onChange={(e) => setContent(e.target.value)}>
          파닥파닥몬
        </PostBody>
        <PostBtnWrap>
          <PostBtn
            onClick={submitButtonHandler}>
            제출하기
          </PostBtn>
        </PostBtnWrap>
      </PostItemWrap>
    </PostWrap>