package com.api.commerce.returnDTO;

public class ReturnDTO {
	private String manssager;
	private Long code;
	private Object content;

	public ReturnDTO() {
	}

	public ReturnDTO(String manssager, Long code, Object content) {
		super();
		this.manssager = manssager;
		this.code = code;
		this.content = content;
	}

	public static class Builder {
		private String manssager;
		private Long code;
		private Object content;

		public Builder() {}

		public Builder setManssager(String manssager) {
			this.manssager = manssager;
			return this;
		}

		public Builder setCode(Long code) {
			this.code = code;
			return this;
		}

		public Builder setContent(Object content) {
			this.content = content;
			return this;
		}

		public ReturnDTO build() {
			return new ReturnDTO(manssager, code, content);
		}

	}

}
