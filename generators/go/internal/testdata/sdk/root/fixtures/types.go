// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/root/fixtures/core"
)

type Bar struct {
	Id      *Id      `json:"id,omitempty" url:"id,omitempty"`
	Name    *string  `json:"name,omitempty" url:"name,omitempty"`
	List    *string  `json:"list,omitempty" url:"list,omitempty"`
	Type    *FooType `json:"type,omitempty" url:"type,omitempty"`
	Request *Request `json:"request,omitempty" url:"request,omitempty"`
	Delay   *string  `json:"delay,omitempty" url:"delay,omitempty"`

	_rawJSON json.RawMessage
}

func (b *Bar) UnmarshalJSON(data []byte) error {
	type unmarshaler Bar
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Bar(value)
	b._rawJSON = json.RawMessage(data)
	return nil
}

func (b *Bar) String() string {
	if len(b._rawJSON) > 0 {
		if value, err := core.StringifyJSON(b._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type Baz struct {
	Id          *Id     `json:"id,omitempty" url:"id,omitempty"`
	Name        *string `json:"name,omitempty" url:"name,omitempty"`
	List        *string `json:"list,omitempty" url:"list,omitempty"`
	Description *string `json:"description,omitempty" url:"description,omitempty"`
	// This field has documentation, so it should be rendered
	// just above the field.
	// Note: Newlines should be preserved.
	HasDocs *string `json:"hasDocs,omitempty" url:"hasDocs,omitempty"`

	_rawJSON json.RawMessage
}

func (b *Baz) UnmarshalJSON(data []byte) error {
	type unmarshaler Baz
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Baz(value)
	b._rawJSON = json.RawMessage(data)
	return nil
}

func (b *Baz) String() string {
	if len(b._rawJSON) > 0 {
		if value, err := core.StringifyJSON(b._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type Error struct {
	Message   *string  `json:"message,omitempty" url:"message,omitempty"`
	Recursive []*Error `json:"recursive,omitempty" url:"recursive,omitempty"`

	_rawJSON json.RawMessage
}

func (e *Error) UnmarshalJSON(data []byte) error {
	type unmarshaler Error
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = Error(value)
	e._rawJSON = json.RawMessage(data)
	return nil
}

func (e *Error) String() string {
	if len(e._rawJSON) > 0 {
		if value, err := core.StringifyJSON(e._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type Foo struct {
	Id      *Id      `json:"id,omitempty" url:"id,omitempty"`
	Name    *string  `json:"name,omitempty" url:"name,omitempty"`
	List    *string  `json:"list,omitempty" url:"list,omitempty"`
	Type    *FooType `json:"type,omitempty" url:"type,omitempty"`
	Request *Request `json:"request,omitempty" url:"request,omitempty"`
	Delay   *string  `json:"delay,omitempty" url:"delay,omitempty"`

	_rawJSON json.RawMessage
}

func (f *Foo) UnmarshalJSON(data []byte) error {
	type unmarshaler Foo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = Foo(value)
	f._rawJSON = json.RawMessage(data)
	return nil
}

func (f *Foo) String() string {
	if len(f._rawJSON) > 0 {
		if value, err := core.StringifyJSON(f._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

type FooType string

const (
	FooTypeOne   FooType = "one"
	FooTypeTwo   FooType = "two"
	FooTypeThree FooType = "three"
	FooTypeFour  FooType = "four"
)

func NewFooTypeFromString(s string) (FooType, error) {
	switch s {
	case "one":
		return FooTypeOne, nil
	case "two":
		return FooTypeTwo, nil
	case "three":
		return FooTypeThree, nil
	case "four":
		return FooTypeFour, nil
	}
	var t FooType
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (f FooType) Ptr() *FooType {
	return &f
}

type Request struct {
	Url      string                 `json:"url" url:"url"`
	Headers  map[string]interface{} `json:"headers,omitempty" url:"headers,omitempty"`
	Body     *string                `json:"body,omitempty" url:"body,omitempty"`
	Platform *string                `json:"platform,omitempty" url:"platform,omitempty"`
	Unknown  interface{}            `json:"unknown,omitempty" url:"unknown,omitempty"`

	_rawJSON json.RawMessage
}

func (r *Request) UnmarshalJSON(data []byte) error {
	type unmarshaler Request
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Request(value)
	r._rawJSON = json.RawMessage(data)
	return nil
}

func (r *Request) String() string {
	if len(r._rawJSON) > 0 {
		if value, err := core.StringifyJSON(r._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type Id = string