// This file was auto-generated by Fern from our API Definition.

package mixedcase

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/mixed-case/fern/internal"
	time "time"
)

type ListResourcesRequest struct {
	PageLimit  int       `query:"page_limit"`
	BeforeDate time.Time `query:"beforeDate"`
}

type NestedUser struct {
	Name       string `json:"Name" url:"Name"`
	NestedUser *User  `json:"NestedUser,omitempty" url:"NestedUser,omitempty"`

	extraProperties map[string]interface{}
}

func (n *NestedUser) GetName() string {
	if n == nil {
		return ""
	}
	return n.Name
}

func (n *NestedUser) GetNestedUser() *User {
	if n == nil {
		return nil
	}
	return n.NestedUser
}

func (n *NestedUser) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *NestedUser) UnmarshalJSON(data []byte) error {
	type unmarshaler NestedUser
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = NestedUser(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties
	return nil
}

func (n *NestedUser) String() string {
	if value, err := internal.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type Organization struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (o *Organization) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Organization) GetExtraProperties() map[string]interface{} {
	return o.extraProperties
}

func (o *Organization) UnmarshalJSON(data []byte) error {
	type unmarshaler Organization
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = Organization(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *o)
	if err != nil {
		return err
	}
	o.extraProperties = extraProperties
	return nil
}

func (o *Organization) String() string {
	if value, err := internal.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

type Resource struct {
	ResourceType string
	Status       ResourceStatus
	User         *User
	Organization *Organization
}

func NewResourceFromUser(value *User) *Resource {
	return &Resource{ResourceType: "user", User: value}
}

func NewResourceFromOrganization(value *Organization) *Resource {
	return &Resource{ResourceType: "Organization", Organization: value}
}

func (r *Resource) GetResourceType() string {
	if r == nil {
		return ""
	}
	return r.ResourceType
}

func (r *Resource) GetStatus() ResourceStatus {
	if r == nil {
		return ""
	}
	return r.Status
}

func (r *Resource) GetUser() *User {
	if r == nil {
		return nil
	}
	return r.User
}

func (r *Resource) GetOrganization() *Organization {
	if r == nil {
		return nil
	}
	return r.Organization
}

func (r *Resource) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		ResourceType string         `json:"resource_type"`
		Status       ResourceStatus `json:"status"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	r.ResourceType = unmarshaler.ResourceType
	r.Status = unmarshaler.Status
	if unmarshaler.ResourceType == "" {
		return fmt.Errorf("%T did not include discriminant resource_type", r)
	}
	switch unmarshaler.ResourceType {
	case "user":
		value := new(User)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		r.User = value
	case "Organization":
		value := new(Organization)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		r.Organization = value
	}
	return nil
}

func (r Resource) MarshalJSON() ([]byte, error) {
	if err := r.validate(); err != nil {
		return nil, err
	}
	switch r.ResourceType {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", r.ResourceType, r)
	case "user":
		return internal.MarshalJSONWithExtraProperty(r.User, "resource_type", "user")
	case "Organization":
		return internal.MarshalJSONWithExtraProperty(r.Organization, "resource_type", "Organization")
	}
}

type ResourceVisitor interface {
	VisitUser(*User) error
	VisitOrganization(*Organization) error
}

func (r *Resource) Accept(visitor ResourceVisitor) error {
	switch r.ResourceType {
	default:
		return fmt.Errorf("invalid type %s in %T", r.ResourceType, r)
	case "user":
		return visitor.VisitUser(r.User)
	case "Organization":
		return visitor.VisitOrganization(r.Organization)
	}
}

func (r *Resource) validate() error {
	if r == nil {
		return fmt.Errorf("type %T is nil", r)
	}
	var fields []string
	if r.User != nil {
		fields = append(fields, "user")
	}
	if r.Organization != nil {
		fields = append(fields, "Organization")
	}
	if len(fields) == 0 {
		if r.ResourceType != "" {
			return fmt.Errorf("type %T defines a discriminant set to %q but the field is not set", r, r.ResourceType)
		}
		return fmt.Errorf("type %T is empty", r)
	}
	if len(fields) > 1 {
		return fmt.Errorf("type %T defines values for %s, but only one value is allowed", r, fields)
	}
	if r.ResourceType != "" {
		field := fields[0]
		if r.ResourceType != field {
			return fmt.Errorf(
				"type %T defines a discriminant set to %q, but it does not match the %T field; either remove or update the discriminant to match",
				r,
				r.ResourceType,
				r,
			)
		}
	}
	return nil
}

type ResourceStatus string

const (
	ResourceStatusActive   ResourceStatus = "ACTIVE"
	ResourceStatusInactive ResourceStatus = "INACTIVE"
)

func NewResourceStatusFromString(s string) (ResourceStatus, error) {
	switch s {
	case "ACTIVE":
		return ResourceStatusActive, nil
	case "INACTIVE":
		return ResourceStatusInactive, nil
	}
	var t ResourceStatus
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (r ResourceStatus) Ptr() *ResourceStatus {
	return &r
}

type User struct {
	UserName        string            `json:"userName" url:"userName"`
	MetadataTags    []string          `json:"metadata_tags,omitempty" url:"metadata_tags,omitempty"`
	ExtraProperties map[string]string `json:"EXTRA_PROPERTIES,omitempty" url:"EXTRA_PROPERTIES,omitempty"`

	extraProperties map[string]interface{}
}

func (u *User) GetUserName() string {
	if u == nil {
		return ""
	}
	return u.UserName
}

func (u *User) GetMetadataTags() []string {
	if u == nil {
		return nil
	}
	return u.MetadataTags
}

func (u *User) GetExtraProperties() map[string]string {
	if u == nil {
		return nil
	}
	return u.ExtraProperties
}

func (u *User) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *User) UnmarshalJSON(data []byte) error {
	type unmarshaler User
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = User(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties
	return nil
}

func (u *User) String() string {
	if value, err := internal.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
